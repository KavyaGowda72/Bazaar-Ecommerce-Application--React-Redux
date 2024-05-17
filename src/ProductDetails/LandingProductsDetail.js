import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { SingleProductDetailAction } from "./Actions/ProductDetailAction"
import MenuComponent from "../Common/Components/MenuComponent"
import ProductDetailComponent from "./productDetailComponent"
import { AddTocartAction } from "../Cart/Action/addToCartAction"

export const LandingProductsDetail =()=>{

    const params=useParams()
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(SingleProductDetailAction(params.productId))
    },[])

    
    const mapStateToProductDetailsProps =(state)=>{
        return state.productDetailData

    }

    let productDetailData = useSelector(mapStateToProductDetailsProps)

    const mapStateToCartProps =(state)=>{
        return state.cartData

    }

    let cartData = useSelector(mapStateToCartProps)
    useEffect(() => { 
        if(cartData && cartData.cartItems && cartData.cartItems.length > 0) {
            window.location = '/cart'
        }
    }, [cartData])

    const onCartClick = () => {
        dispatch(AddTocartAction(
            productDetailData.productDetail.id,
            productDetailData.productDetail.thumbnail,
            productDetailData.productDetail.title,
            productDetailData.productDetail.price));
      };



    return(
    <div>
    
    <div className="detailPage">
    <MenuComponent />
    {
        (productDetailData && productDetailData.productDetail) 
        ?
             <ProductDetailComponent 
             productId={productDetailData.productDetail.id}
           productDetailImage={productDetailData.productDetail.thumbnail}
           productDetailTitle={productDetailData.productDetail.title}
           productDetailPrice={productDetailData.productDetail.price}
           ProductDetailDescription={productDetailData.productDetail.description}
           onCartClick={onCartClick}
           />
        : null
        }
       
    </div>
</div>
    )
}

