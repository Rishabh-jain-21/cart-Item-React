(this.webpackJsonpcart=this.webpackJsonpcart||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),i=n(7),o=n.n(i),s=n(2),a=n(3),p=n(5),u=n(4),d=(n(12),n(0)),l=function(t){Object(p.a)(n,t);var e=Object(u.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var t=this,e=this.props.product,n=e.price,c=e.title,r=e.img;return Object(d.jsxs)("div",{className:"cart-body",children:[Object(d.jsx)("span",{style:{display:"flex",justifyContent:"center",width:"150px"},children:Object(d.jsx)("img",{src:r,alt:"Sorry For Error !!",style:{height:"100px",marginTop:"10px",padding:"10px"}})}),Object(d.jsxs)("div",{className:"right-side",children:[Object(d.jsx)("h5",{style:{marginTop:"19px",fontSize:"21px"},children:c}),Object(d.jsxs)("p",{style:{marginTop:"-10px"},children:["Rs : ",n]}),Object(d.jsxs)("p",{style:{marginTop:"-20px"},children:["Qty : ",this.props.product.qty]}),Object(d.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/992/992683.png",alt:"Sorry For Error !!",className:"image-buttons",onClick:function(){return t.props.onDecreaseQuantity(t.props.product)}}),Object(d.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/992/992651.png",alt:"Sorry For Error !!",className:"image-buttons left",onClick:function(){return t.props.onIncreaseQuantity(t.props.product)}}),Object(d.jsx)("img",{src:"https://cdn-icons.flaticon.com/png/512/484/premium/484611.png?token=exp=1635159463~hmac=6b33f75de3145ecdc31952a6961f6e4b",alt:"Sorry For Error !!",className:"image-buttons left",onClick:function(){return t.props.onDeleteComponent(t.props.product.id)}})]})]})}}]),n}(c.Component),h=l,m=function(t){var e=t.products;return Object(d.jsx)("div",{className:"Cart-body container",children:e.map((function(e){return Object(d.jsx)(h,{product:e,onIncreaseQuantity:t.onIncreaseQuantity,onDecreaseQuantity:t.onDecreaseQuantity,onDeleteComponent:t.onDeleteComponent,qty:e.qty},e.id)}))})},j={cartIcon:{height:32,marginRight:20},nav:{height:70,background:"rgb(42 43 65)",display:"flex",justifyContent:"space-between",alignItems:"center"},cartIconContainer:{position:"relative",paddingRight:"10px"},cartCount:{height:"25px",width:"25px",background:"yellow",borderRadius:"50%",position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",right:15,top:-9}},g=function(t){return Object(d.jsxs)("div",{style:j.nav,children:[Object(d.jsxs)("div",{style:{display:"flex",alignItems:"center",color:"aliceblue"},children:[Object(d.jsx)("img",{src:"https://cdn-icons.flaticon.com/png/512/869/premium/869441.png?token=exp=1635259566~hmac=4040a032d5c8f57e662203af0c2f613b",alt:"icon_photu",style:{height:45,paddingLeft:"20px"}}),Object(d.jsx)("h2",{style:{marginTop:"10px"},children:"Shop-Shit"})]}),Object(d.jsxs)("div",{style:j.cartIconContainer,children:[Object(d.jsx)("img",{style:j.cartIcon,src:"https://cdn-icons.flaticon.com/png/512/4201/premium/4201403.png?token=exp=1635257899~hmac=d5fab847733f8392920fc8b48338a84e",alt:"cart-Photu"}),Object(d.jsx)("span",{style:j.cartCount,children:t.count})]})]})},y=function(t){Object(p.a)(n,t);var e=Object(u.a)(n);function n(){var t;return Object(s.a)(this,n),(t=e.call(this)).getCount=function(){var e=t.state.products,n=0;return e.forEach((function(t){n+=t.qty})),n},t.totalPriceCharge=function(){var e=t.state.products,n=0;return e.map((function(t){n+=t.qty*t.price})),n},t.handleDecreaseQuantity=function(e){var n=t.state.products.indexOf(e);t.state.products[n].qty>=1&&(t.state.products[n].qty=t.state.products[n].qty-1,t.setState({products:t.state.products}))},t.handleIncreaseQuantity=function(e){var n=t.state.products.indexOf(e);t.state.products[n].qty=t.state.products[n].qty+1,t.setState({products:t.state.products})},t.handleDeleteComponent=function(e){var n=t.state.products.filter((function(t){return t.id!==e}));t.setState({products:n})},t.state={products:[{id:1,price:3999,title:"Boat Watch",qty:1,img:"https://rukminim1.flixcart.com/image/416/416/kkprmvk0/smartwatch/v/j/n/storm-android-ios-boat-original-imafzzu29tguvtqg.jpeg?q=70"},{id:2,price:13999,title:"LED TV",qty:1,img:"https://m.media-amazon.com/images/I/913DBkJKHZL._AC_SR180,120_QL70_.jpg"},{id:3,price:41999,title:"DELL I5",qty:1,img:"https://m.media-amazon.com/images/I/51qwcXo1lCL._AC_UY327_FMwebp_QL65_.jpg"}]},t}return Object(a.a)(n,[{key:"render",value:function(){var t=this.state.products;return Object(d.jsxs)("div",{children:[Object(d.jsx)(g,{count:this.getCount()}),Object(d.jsx)(m,{products:t,onIncreaseQuantity:this.handleIncreaseQuantity,onDecreaseQuantity:this.handleDecreaseQuantity,onDeleteComponent:this.handleDeleteComponent}),Object(d.jsx)("div",{className:"container my-3",children:Object(d.jsxs)("h3",{children:["Total Price : ",this.totalPriceCharge()]})})]})}}]),n}(c.Component),b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),c(t),r(t),i(t),o(t)}))};o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root")),b()}},[[14,1,2]]]);
//# sourceMappingURL=main.eb18347d.chunk.js.map