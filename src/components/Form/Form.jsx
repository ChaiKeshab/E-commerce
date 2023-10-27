import Dropdown from '../Dropdown/Dropdown';
import Button from '../Button/Button';
import insta from '../../assets/insta.png'

function Form() {
    const dropdowns = [
        {
            id: 'level',
            name: 'level',
            options: [
                { label: 'Under Graduation', value: 'Under Graduation' },
                { label: 'Post Graduation', value: 'Post Graduation' },
                { label: 'Option 3', value: 'option3' },
                { label: 'Option 4', value: 'option4' },
            ],
        },
        {
            id: 'country',
            name: 'country',
            options: [
                { label: 'Select Country', value: 'Select Country' },
                { label: 'Option B', value: 'optionB' },
                { label: 'Option C', value: 'optionC' },
            ],
        },
        {
            id: 'course',
            name: 'course',
            options: [
                { label: 'Select Course', value: 'Select Course' },
                { label: 'Item Y', value: 'itemY' },
                { label: 'Item Z', value: 'itemZ' },
            ],
        },
    ];

    return (
        <form className='form flex flex-col justify-center bg-white'>

            <div className='border border-[#C8D3E9] p-3 flex justify-center items-center'>
                <img src={insta} alt="" />
                <h3 className='text-xl mx-2'>Let us know your study options</h3>
            </div>

            <div className='py-7 px-11 flex flex-col space-y-2'>
                {dropdowns.map((dropdown) => (
                    <Dropdown key={dropdown.id} {...dropdown} />
                ))}
            </div>
            <div className='text-center py-10 bg-[#003399]'>
                <Button
                    type='button'           //change it to submit
                    label='SUBMIT'
                    className='border-2 border-primary text-center bg-[#003399] text-white w-fit py-2 px-12 
                hover:bg-primary'
                />
            </div>
        </form>
    );
}

export default Form;