const CustomerIndex = ({route}) => {
    const {customer_id} = route.params
    return (
        <>
        <p>{customer_id}</p>
        </>
    )

}

export default CustomerIndex