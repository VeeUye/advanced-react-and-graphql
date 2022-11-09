import useForm from '../lib/useForm';
import Form from './styles/Form';

export default function CreateProduct() {
    const { inputs, handleChange, clearForm, resetForm } = useForm({
        image: '',
        name: 'Nice Shoes',
        price: 3456,
        description: 'best shoes ever',
    });

    return (
        <Form
            onSubmit={(e) => {
                e.preventDefault();
                console.log(inputs);
            }}
        >
            <fieldset>
                <label htmlFor="image">
                    Image
                    <input required type="file" id="image" name="image" onChange={handleChange} />
                </label>
                <label htmlFor="price">
                    Price
                    <input
                        type="number"
                        id="price"
                        name="price"
                        placeholder="price"
                        value={inputs.price}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="description">
                    Description
                    <textarea
                        id="description"
                        name="description"
                        placeholder="description"
                        value={inputs.description}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">+ Add Product</button>
            </fieldset>
        </Form>
    );
}
