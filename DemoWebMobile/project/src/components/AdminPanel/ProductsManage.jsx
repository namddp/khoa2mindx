import React,{useState} from 'react'
import { ProductsData } from '../../data/ProductsData';
import './ProductsManage.css';

const ProductsManage = (props) => {
  const {products,setProducts} = props;
    const[name,setName] =  useState('');
    const[price,setPrice] =  useState('');
    const[image,setImage] =  useState('');
    const[type,setType] =  useState('');
    const[brand,setBrand] =  useState('');
    const [product,setProduct] = useState({
        id : '',
        type: '',
        name : '',
        serial : 'AMOT001-7',
        brand : '',
        color : ['gray','white','golden'],
        url : '',
        options : [{
            ram : '8GB',
            info: [{
                rom: "256GB",
                price: '',
            }]
        }],
        image: ['']
});
      console.log(products)
        const handleChange = (event) => {
            const { name, value } = event.target;
            setProduct({ ...product, [name]: value });
          };
        const handleEdit = (event) => {
            event.preventDefault();
            setProducts(prev => prev.filter(it => it.id !== product.id))
            setProducts(prev => [...prev,product])
        }

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const productData = {
            id : ProductsData.length,
            type: type,
            name : name,
            serial : 'AMOT001-7',
            brand : brand,
            color : ['gray','white','golden'],
            url : '',
            options : [{
                ram : '8GB',
                info: [{
                    rom: "256GB",
                    price: price,
                }]
            }],
            image: [image]
        };
        setProducts(prev => [...prev,productData])
    }
    const handleDelete = (id) => {
        setProducts(prev => prev.filter(e => e.id !== id))
    }
  return (
    <>
    <div className='add_products'>
        <form onSubmit={handleSubmit}>
          <h1>Thêm Sản Phẩm Mới</h1>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Type:
        <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
      </label>
      <label>
        Brand:
        <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />
      </label>
      <label>
        image:
        <textarea value={image} onChange={(e) => setImage(e.target.value)} />
      </label>
      <label>
        Price:
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <button type="submit">Add Product</button>
    </form>
    </div>
    <div className='delete_products'>
      <h1>Xoá, Sửa Sản Phẩm</h1>
        <ul className='list_item'>
            {products.map(il => {
                return(
                    <li>
                        <img src="" alt="" />
                        <h5>{il.name}</h5>
                        <button onClick={() => handleDelete(il.id)}>Xoá Sản Phẩm</button>
                        <div className="edit_form">
                          <h6>Sửa Thông Tin</h6>
           <form onSubmit={handleEdit}>
              <label>
                ID:
                <input type="text" name='id' value={product.id} onChange={handleChange} placeholder={il.id}/>
              </label>
              <label>
                Name:
                <input type="text" name='name' value={product.name} onChange={handleChange} placeholder={il.name}/>
              </label>
              <label>
                Type:
                <input type="text" name='type' value={product.type} onChange={handleChange} placeholder={il.type}/>
              </label>
              <label>
                Brand:
                <input type="text" name='brand' value={product.brand} onChange={handleChange} placeholder={il.brand}/>
              </label>
              <label>
                image:
                <textarea value={product.image} name='image' onChange={handleChange} placeholder='link ảnh'/>
              </label>
              <label>
                Price:
                <input type="number" name='price' value={product.price} onChange={handleChange} placeholder={il.options[0].info[0].price}/>
              </label>
              <button type="submit">Confirm</button>
          </form>
      </div>    
                    </li>
                )
            })}
        </ul>
        
    </div>
    {/* <div className='edit_products'>
    <ul className='list_item'>
            {products.map(il => {
                return(
                    <li>
                        <img src="" alt="" />
                        <h5>{il.name}</h5>
                        <button onClick={() => openEditForm(il.id)}>Sửa Thông Tin</button>
                    </li>
                )
            })}
        </ul>
    </div> */}
    </>
  )
}

export default ProductsManage