import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchProductByIdAsync, updateProductAsync } from '../app/slices/productSlice';
import { productInputs } from '../utils/formInputs';
import { classNames } from '../utils/helpers';
import InputControl from '../components/InputControl';
import ButtonLoader from '../components/ButtonLoader';
import LoadingSpinner from '../components/LoadingSpinner';

const AdminUpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({});
  const [updateStatus, setUpdateStatus] = useState('idle');

  const status = useSelector(state => state.product.selectedProductStatus);
  const error = useSelector(state => state.product.selectedProductError);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await dispatch(fetchProductByIdAsync(id)).unwrap();
        setProduct(product);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [id]);

  if (status === 'idle' || status === 'loading') {
    return <LoadingSpinner />;
  }

  if (error) {
    throw error;
  }

  const handleChange = e => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      setUpdateStatus('pending');
      await dispatch(updateProductAsync({ id, updates: product })).unwrap();
      navigate('/admin/products', { replace: true });
    } catch (error) {
      console.log(error);
    } finally {
      setUpdateStatus('idle');
    }
  };

  return (
    <main className='page-height px-12 py-10 flex flex-col items-center gap-10'>
      <h1 className='text-3xl'>Update product</h1>

      <form className='max-w-2xl w-full space-y-5' onSubmit={handleSubmit}>
        {productInputs.map(input => (
          <InputControl
            key={input.id}
            {...input}
            value={product[input.name]}
            onChange={handleChange}
          />
        ))}

        <button
          className={classNames(
            'w-full h-12 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 flex justify-center items-center',
            updateStatus === 'pending' ? 'cursor-wait' : ''
          )}
          type='submit'
          disabled={updateStatus === 'pending'}
        >
          {updateStatus === 'pending' ? <ButtonLoader /> : 'Update product'}
        </button>
      </form>
    </main>
  );
};

export default AdminUpdateProduct;
