import cake1 from './assets/cupcake.jpg'
import cake2 from './assets/lemonvanillacake.jpg'
import cake3 from './assets/rosevanillacake.jpg'
import cake4 from './assets/colorcake.jpg'
import cake5 from './assets/chocolatecake.jpg'
import cake6 from './assets/dessertcup.jpg'
import cake7 from './assets/blueberrycake.jpg'
import cake8 from './assets/blackforest.jpg'
function Cake(){
    return(
        <div className="cakediv">
            <h1>𝑪𝒂𝒌𝒆𝒔</h1>
            <div className="cakes">
                <div className="cake">
                    <img src={cake1} alt="" />
                    <h4>Cup Cake</h4>
                    <p>A mini, fluffy cake topped with delicious frosting, perfect for single-serve indulgence.</p>
                    <br />
                    <div>
                    <button className="b1">See details</button>
                    <button className="b2">Order now</button>
                    </div>
                    <br />
                </div>
                <div className="cake">
                    <img src={cake2} alt="" />
                    <h4>Lemon Vanilla Cake</h4>
                    <p>A zesty and refreshing blend of tangy lemon and smooth vanilla,light and flavorful bite.</p>
                    <br />
                    <div>
                    <button className="b1">See details</button>
                    <button className="b2">Order now</button>
                    </div>
                    <br />
                </div>
                <div className="cake">
                    <img src={cake3} alt="" />
                    <h4>Rose Vanilla Cake</h4>
                    <p>A delightful fusion of floral rose and creamy vanilla, offering a soft and aromatic treat.</p>
                    <br />
                    <div>
                    <button className="b1">See details</button>
                    <button className="b2">Order now</button>
                    </div>
                    <br />
                </div>
                <div className="cake">
                    <img src={cake4} alt="" />
                    <h4>Colorful Cake</h4>
                    <p> A vibrant and fun cake with multiple colorful layers, bringing joy and excitement to every celebration.</p>
                    <br />
                    <div>
                    <button className="b1">See details</button>
                    <button className="b2">Order now</button>
                    </div>
                    <br />
                </div>
                <div className="cake">
                    <img src={cake5} alt="" />
                    <h4>Chocolate Cake</h4>
                    <p>A rich and decadent delight, perfect for all chocolate lovers with its moist layers and creamy frosting.</p>
                    <br />
                    <div>
                    <button className="b1">See details</button>
                    <button className="b2">Order now</button>
                    </div>
                    <br />
                </div>
                <div className="cake">
                    <img src={cake6} alt="" />
                    <h4>Dessert Cup Cake</h4>
                    <p> A luxurious treat crafted with layers of sweetness, making every bite a delightful dessert experience.</p>
                    <br />
                    <div>
                    <button className="b1">See details</button>
                    <button className="b2">Order now</button>
                    </div>
                    <br />
                </div>
                <div className="cake">
                    <img src={cake7} alt="" />
                    <h4>Blue Berry Cake</h4>
                    <p>A soft and fluffy cake infused with juicy blueberries, offering a perfect balance of sweetness and tartness.</p>
                    <br />
                    <div>
                    <button className="b1">See details</button>
                    <button className="b2">Order now</button>
                    </div>
                    <br />
                </div>
                <div className="cake">
                    <img src={cake8} alt="" />
                    <h4>Black Forest Cake</h4>
                    <p>A classic German dessert featuring layers of chocolate cake, fresh cherries, and whipped cream, topped with chocolate shavings.</p>
                    <br />
                    <div>
                    <button className="b1">See details</button>
                    <button className="b2">Order now</button>
                    </div>
                    <br />
                </div>
            </div>
            <div className="anchor">
                <a href="">see more ›</a>
            </div>
        </div>
    );
}
export default Cake