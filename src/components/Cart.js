import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cart = () => {
    //useSelector hook is used to get or return the state from redux
    const products = useSelector(state => state.cart);

    const [isEmpty, setIsEmpty] = useState(true);

    useEffect(() => {
        if (products.length === 0) { //if there are no items in cart then set isEmpty true using setIsEmpty
        setIsEmpty(true);
        } else { //if there are items in cart that means the product length is greater than 1 then set isEmpty false using setIsEmpty
        setIsEmpty(false);
        }
        }, [products]);

    const dispatch = useDispatch();


    const removeItem = (id,title) => {
        //dispatch a remove action
        dispatch(remove(id))

        toast.success(<div>Successfully Removed <b> {title} </b> From The Cart!</div>,
        {
            position:"bottom-right",
            autoClose:1500
        })

    }


    const cards =
 
    products.map(product => (
        <div className='col-md-6' style={{ marginBottom: '15px' }}>
            <Card key={product.id} className='h-100'>
                <div className='text-center'>
                    <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        INR. {product.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer style={{ background: 'white' }}>
                    <Button variant="danger" onClick={() => removeItem(product.id,product.title)}>Remove Item</Button>

                </Card.Footer>
            </Card>
        </div>
    ))
    


    return (
        <>
            <h1>My Cart</h1>
                    <div style={{textAlign:'left'}}>{isEmpty && <div>
                        <h3>
                        Your Shopping Cart is empty
                        <img src='https://static.vecteezy.com/system/resources/thumbnails/004/798/846/small/shopping-cart-logo-or-icon-design-vector.jpg' 
                            style={{marginLeft:'0'}}
                        />
                        </h3> 
                        <hr style={{marginTop:'-10px'}}/>
                        </div>}
                    </div>
                    <div className='row'>

                {cards}
            </div>
        <ToastContainer theme='colored'/>
        </>
    )
}

export default Cart
