import React,{useState} from 'react'
import { ProductsData } from '../../data/ProductsData';

const ProductsManage = () => {
    const[name,setName] =  useState('');
    const[price,setPrice] =  useState('');
    const[image,setImage] =  useState('');
    const[type,setType] =  useState('');
    const[brand,setBrand] =  useState('');
    const[status,setStatus] =  useState(true);
    const [product,setProduct] = useState({
        id : '',
        type: '',
        name : '',
        serial : 'AMOT001-7',
        brand : '',
        color : ['gray','white','golden'],
        url : '',
        ram_options : [{
            ram : '8GB',
            info: [{
                rom: "256GB",
                price: '',
            }]
        }],
        image: ['']
});

    const openEditForm = (id) => {
        
        const handleChange = (event) => {
            const { name, value } = event.target;
            setProduct({ ...product, [name]: value });
          };
        const handleEdit = (event) => {
            event.preventDefault();
            ProductsData = ProductsData.filter(it => it.id !== id)
            ProductsData = [...ProductsData,product]
        }
        setStatus(!status)
return(
           status ? <></> : <div className="edit_form">
           <form onSubmit={handleEdit}>
              <label>
                ID:
                <input type="text" name='id' value={product.id} onChange={handleChange} />
              </label>
              <label>
                Name:
                <input type="text" name='name' value={product.name} onChange={handleChange} />
              </label>
              <label>
                Type:
                <input type="text" name='type' value={product.type} onChange={handleChange} />
              </label>
              <label>
                Brand:
                <input type="text" name='brand' value={product.brand} onChange={handleChange} />
              </label>
              <label>
                image:
                <textarea value={product.image} name='image' onChange={handleChange} />
              </label>
              <label>
                Price:
                <input type="number" name='price' value={product.price} onChange={handleChange} />
              </label>
              <button type="submit">Confirm</button>
          </form>
      </div>
            
        )
        
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
            ram_options : [{
                ram : '8GB',
                info: [{
                    rom: "256GB",
                    price: price,
                }]
            }],
            image: [image]
        };
        ProductsData = [...ProductsData,productData]
    }
    const handleDelete = (id) => {
        ProductsData = ProductsData.filter(e => e.id !== id)
    }
  return (
    <>
    <div className='add_products'>
        <form onSubmit={handleSubmit}>
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
        <ul className='list_item'>
            {ProductsData.map(il => {
                return(
                    <li>
                        <img src="" alt="" />
                        <h5>{il.name}</h5>
                        <button onClick={() => handleDelete(il.id)}>Xoá Sản Phẩm</button>
                    </li>
                )
            })}
        </ul>
        
    </div>
    <div className='edit_products'>
    <ul className='list_item'>
            {ProductsData.map(il => {
                return(
                    <li>
                        <img src="" alt="" />
                        <h5>{il.name}</h5>
                        <button onClick={() => openEditForm(il.id)}>Sửa Thông Tin</button>
                    </li>
                )
            })}
        </ul>
    </div>
    </>
  )
}

export default ProductsManage