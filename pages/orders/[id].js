import { useRouter } from 'next/router'

function OrderDetail() {
    const router = useRouter()
  const { id } = router.query
    return (
        <div>
            order: {id}
        </div>
    )
}

export default OrderDetail
