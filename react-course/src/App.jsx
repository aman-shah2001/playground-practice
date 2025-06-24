import Header from './header'
import Navbar from './navbar'
import Counter from './counter'
import Card from './card'


function App() {
  return (
    <div>
      <Counter />
      <Header />
      <Navbar />
      <div className="cards">
        <Card title="card1" description="card1 des"/>
        <Card title="card2" description="card2 des" img={ <img src="https://th.bing.com/th/id/OIP.y-9e4X2HpmuCDpYj4wypXgHaFL?pid=ImgDet&w=474&h=331&rs=1" alt="img" />}/>
        <Card title="card3" description="card3 des"/>
        <Card title="card4" description="card4 des"/>
      </div>
    </div>
  )
}
export default App
