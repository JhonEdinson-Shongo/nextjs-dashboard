export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  async function create(formData: FormData) {
    'use server';
    const name = formData.get('name')?.toString() || '';
    console.log('Creating customer:', name);
  }
  return (
    <>
      <p>Customers Page</p>
      <form action={create}>
        <input type="text" name="name" placeholder="Customer Name" />
        <button type="submit">Create Customer</button>
      </form>
    </>
  );
}