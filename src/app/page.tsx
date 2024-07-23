import List from './components/List';



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-cyan-700 p-12">
      <img className='svg-color animate-bounce w-[125px] h-[125px]' src="/assets/icons/smartphone.svg" alt="phoneFinder logo"/>
     
     <List type="phone"/>
    </main>
  );
}
