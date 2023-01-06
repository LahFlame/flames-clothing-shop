

export const addItemToCart = (items,newItem) => {
    const itemChecker = items.find(item => item.id === newItem.id)
    if (itemChecker){
            return items.map(item => item.id === newItem.id ? item = {...item,quantity: item.quantity+1} : item)
    }
    return [...items,{...newItem,quantity: 1}]
}