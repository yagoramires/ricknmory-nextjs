export default function SearchForm() {
  return (
    <form className='w-full'>
      <button type='submit'></button>
      <input
        type='text'
        className='px-4 py-2 w-full lg:w-[400px] rounded-full outline-none'
        placeholder='Search...'
      />
    </form>
  );
}
