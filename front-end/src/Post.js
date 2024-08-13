export default function Post() {
  return (
    <div className='post'>
      <div className='image'>
        <img
          src='https://techcrunch.com/wp-content/uploads/2023/04/GettyImages-1467861345.jpg'
          alt='main photo'
        />
      </div>
      <div className='texts'>
        <h2>Lorem ipsum header</h2>
        <p className='info'>
          <a href='' className='author'>
            Tim Crawley
          </a>
          <time>2024-08-12 17:30</time>
        </p>
        <p className='summary'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          dolores ipsam? Exercitationem beatae tempora quos quibusdam odit
          consectetur esse ducimus, veritatis incidunt et dolor non deleniti nam
          magnam perferendis modi.
        </p>
      </div>
    </div>
  );
}
