

export const addItemToCart = (items,newItem) => {
    const itemChecker = items.find(item => item.id === newItem.id)
    if (itemChecker){
            return items.map(item => item.id === newItem.id ? item = {...item,quantity: item.quantity+1} : item)
    }
    return [...items,{...newItem,quantity: 1}]
}

export const decreaseQuantity = (items,newItem) => {
    const itemChecker = items.find(item => item.id === newItem.id);
    if(itemChecker.quantity === 1){
        return items.filter(item => item.id !== newItem.id)
    }
    return items.map(item => item.id === newItem.id  ? {...item,quantity: item.quantity - 1} : item )
}