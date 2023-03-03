import fs from 'fs/promises';
import Link from 'next/link';
import path from 'path';
function HomePage(props) {
  const { products } = props;
  return (
    <ul>
      {/* <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li> */}
      {products.map((product) => (
        <Link href={`/products/${product.id}`}>
          <li key={product.id}>{product.title}</li>
        </Link>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  //console.log('RE Generated...');
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return {
    props: {
      products: data.products,
    },
    //revalidate: 1,
  };
}
export default HomePage;
