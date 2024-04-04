import Img1 from './img1.png'
export default function MainFunction(){
    let CardFunction = [
        {
          id: 1, Discreption: "14 Restaurants Products", NameProduct:"pizza",
          image: (
            <img src={Img1} className="img" />
          )
        }
      ]
    
      let CardFunctionArray = CardFunction.map((Content) => {
        return (
          <CardContent key={Content.id}  Discreption={Content.Discreption} NameProduct={Content.NameProduct} >
            {Content.image}
          </CardContent>
        )
      })
    return(
        <div className="main_div_body" >
         {CardFunctionArray}
        </div> 
    )
}
function CardContent({children,Discreption,NameProduct}){
    return(
        <div className="padding_parent" >
        <div className="img_div">
            {children}
        </div>
        <div className="name_product" >
            {NameProduct}
        </div>
        
            <span className="discreption">
                {Discreption}
            </span>
      
        </div >
    )
}
