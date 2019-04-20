function orderTotal(order) {
    return order.items.reduce(
        (prev, cur) => cur.price * (cur.quantity || 1) + prev,
        0
    );
}


it('Quantity', () =>
    expect(
        orderTotal({ items: [{ name: 'abc', price: 120, quantity: 2 }] })
    ).toBe(240));