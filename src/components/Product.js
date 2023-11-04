import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../store/cartSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './product.css'
const Product = () => {
    const dispatch = useDispatch();

    //we used useSelector hook in order to read the state or data from redux store

    


    const [isLoading, setIsLoading] = useState(true);

    //we will need useState only if we want to call api from Product.js component, if we are calling api from redux (slice) then we dont need the useState hook as the state is already been managed by redux store 
    const [products, setProducts] = useState([]); 
    //products variable stores initial state

    const [searchInput, setSearchInput] = useState('');

    

   useEffect(() => {
      
    setIsLoading(true);


        //call api without using redux thunk

        fetch('https://fakestoreapi.com/products')
            .then(data => data.json())
            .then(result => {
                setProducts(result);
                setIsLoading(false);

            })
    }, [])
 

    
    const filterProducts = () => {
        return products.filter((product) => {
          return product.title.toLowerCase().includes(searchInput.toLowerCase());
        });
      };

      

    const addToCart = (product) => {
        //dispatch an add action
        dispatch(add(product));
        toast.success(<div> <b> {product.title} </b> Was Successfully Added To Your Cart!</div>,
        {
            position:"bottom-right",
            autoClose:1500
        })
    }

 

    



    //we applied map function on products state because products variable holds the complete state or complete data
    const cards = filterProducts().map(product => (
        <>

            <div className='col-md-3' style={{ marginBottom: '15px' }}>
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
                        <Button variant="primary" onClick={() => addToCart(product)}>Add To Cart</Button>

                    </Card.Footer>
                </Card>
            </div>
        </>
    ))

    return (
        <>

            <h1>Product Dashboard</h1>

            
      <input
        className='mb-4 mt-2'
        type="text"
        placeholder="&#xF002; Search products... "
       
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        style={{
            padding:' 7px',
            boxSizing:' border-box',
            border: 'none',
            borderBottom:' 2px solid red',
            width: '46vw',
            fontFamily:"'Helvetica', FontAwesome, sans-serif"
        }}
      />
            <div className='row'>
            {isLoading && <h4>Loading....</h4>}

                {cards}

            </div>
            <ToastContainer theme='colored'/>
        </>
    )
}

export default Product
