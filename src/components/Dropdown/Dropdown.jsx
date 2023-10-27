/*eslint-disable */
function Dropdown({
    label = null,
    id,
    name,
    options
}) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <select className="bg-[#F5F5F5] border rounded-md p-2 my-1 outline-none"
                id={id} name={name}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </>
    );
}

export default Dropdown;