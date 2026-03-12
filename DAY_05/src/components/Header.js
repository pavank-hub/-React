export default function Header(){
     return (
        <div className="heading">
            <div>
                <img className="images" src="https://images.seeklogo.com/logo-png/35/1/myntra-logo-png_seeklogo-355038.png" height="80px" width="80px" />
            </div>
            <div className="option">
                <button className="but">Men</button>
                <button className="but">Women</button>
                <button className="but">Kids</button>
                <button className="but">Home and Living</button>
                <button className="but">Beauty</button>
                <button className="but">Studio</button>
            </div>

            <input placeholder="Search for products, brands and more" className="searchbar"></input>

            <div className="Profile">
                <button className="pro">Profiles</button>
                <button className="pro">Wishlist</button>
                <button className="pro">Bag</button>
            </div>
        </div>
     )
}