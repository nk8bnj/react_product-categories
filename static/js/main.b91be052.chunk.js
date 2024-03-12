(this["webpackJsonpreact_product-categories-practice"]=this["webpackJsonpreact_product-categories-practice"]||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),r=a(3),l=a.n(r),i=(a(8),a(9),a(0));var n=e=>{let{searchQuery:t,setSearchQuery:a}=e;return Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(i.jsx)("input",{"data-cy":"SearchField",type:"text",className:"input",placeholder:"Search",value:t,onChange:e=>a(e.target.value)}),Object(i.jsx)("span",{className:"icon is-left",children:Object(i.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})}),Object(i.jsx)("span",{className:"icon is-right",children:Object(i.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete"})})]})})};var d=e=>{let{categories:t,selectedCategorysId:a,setSelectedCategorysId:s}=e;return Object(i.jsxs)("div",{className:"panel-block is-flex-wrap-wrap",children:[Object(i.jsx)("a",{href:"#/","data-cy":"AllCategories",className:"button is-success mr-6 ".concat(a.length&&"is-outlined"),onClick:()=>s([]),children:"All"}),t.map((e=>Object(i.jsx)("a",{"data-cy":"Category",className:"button mr-2 my-1 ".concat(a.includes(e.id)&&"is-info"),href:"#/",onClick:()=>{a.includes(e.id)?s(a.filter((t=>t!==e.id))):s([...a,e.id])},children:e.title},e.id)))]})};var o=e=>{let{users:t,selectedUserName:a,setSelectedUserName:s}=e;return Object(i.jsxs)("p",{className:"panel-tabs has-text-weight-bold",children:[Object(i.jsx)("a",{"data-cy":"FilterAllUsers",href:"#/",className:"All"===a?"is-active":"",onClick:()=>s("All"),children:"All"}),t.map((e=>Object(i.jsx)("a",{"data-cy":"FilterUser",href:"#/",className:e.name===a?"is-active":"",onClick:()=>s(e.name),children:e.name},e.id)))]})};var j=e=>{let{product:t}=e;return Object(i.jsxs)("tr",{"data-cy":"Product",children:[Object(i.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:t.id}),Object(i.jsx)("td",{"data-cy":"ProductName",children:t.name}),Object(i.jsx)("td",{"data-cy":"ProductCategory",children:"".concat(t.category.icon," - ").concat(t.category.title)}),Object(i.jsx)("td",{"data-cy":"ProductUser",className:"m"===t.user.sex?"has-text-link":"has-text-danger",children:t.user.name})]})};var h=e=>{let{products:t}=e;return Object(i.jsx)("tbody",{children:t.map((e=>Object(i.jsx)(j,{product:e},e.id)))})};var x=e=>{let{products:t}=e;return Object(i.jsxs)("table",{"data-cy":"ProductTable",className:"table is-striped is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:Object(i.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["ID",Object(i.jsx)("a",{href:"#/",children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})}),Object(i.jsx)("th",{children:Object(i.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Product",Object(i.jsx)("a",{href:"#/",children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-down"})})})]})}),Object(i.jsx)("th",{children:Object(i.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Category",Object(i.jsx)("a",{href:"#/",children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-up"})})})]})}),Object(i.jsx)("th",{children:Object(i.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["User",Object(i.jsx)("a",{href:"#/",children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})})]})}),Object(i.jsx)(h,{products:t})]})},b=[{id:1,title:"Grocery",icon:"\ud83c\udf5e",ownerId:2},{id:2,title:"Drinks",icon:"\ud83c\udf7a",ownerId:1},{id:3,title:"Fruits",icon:"\ud83c\udf4f",ownerId:2},{id:4,title:"Electronics",icon:"\ud83d\udcbb",ownerId:1},{id:5,title:"Clothes",icon:"\ud83d\udc5a",ownerId:3}],m=[{id:1,name:"Roma",sex:"m"},{id:2,name:"Anna",sex:"f"},{id:3,name:"Max",sex:"m"},{id:4,name:"John",sex:"m"}];a(11);const u=[{id:1,name:"Milk",categoryId:2},{id:2,name:"Bread",categoryId:1},{id:3,name:"Eggs",categoryId:1},{id:4,name:"Jacket",categoryId:5},{id:5,name:"Sugar",categoryId:1},{id:6,name:"Banana",categoryId:3},{id:7,name:"Beer",categoryId:2},{id:8,name:"Socks",categoryId:5},{id:9,name:"Apples",categoryId:3}].map((e=>{const t=b.find((t=>t.id===e.categoryId)),a=m.find((e=>e.id===t.ownerId));return{...e,category:t,user:a}})),p=()=>{const[e,t]=c.a.useState("All"),[a,s]=c.a.useState([]),[r,l]=c.a.useState(""),j=(()=>{let t=[...u];return"All"!==e&&(t=t.filter((t=>t.user.name===e))),a.length&&(t=t.filter((e=>a.includes(e.category.id)))),r&&(t=t.filter((e=>e.name.toLowerCase().includes(r.toLowerCase())))),t})();return Object(i.jsx)("div",{className:"section",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{className:"title",children:"Product Categories"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("nav",{className:"panel",children:[Object(i.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(i.jsx)(o,{users:m,selectedUserName:e,setSelectedUserName:t}),Object(i.jsx)(n,{searchQuery:r,setSearchQuery:l}),Object(i.jsx)(d,{categories:b,selectedCategorysId:a,setSelectedCategorysId:s}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsx)("a",{"data-cy":"ResetAllButton",href:"#/",className:"button is-link is-outlined is-fullwidth",onClick:()=>{t("All"),l(""),s([])},children:"Reset all filters"})})]})}),Object(i.jsx)("div",{className:"box table-container",children:u.length?Object(i.jsx)(x,{products:j}):Object(i.jsx)("p",{"data-cy":"NoMatchingMessage",children:"No products matching selected criteria"})})]})})};l.a.render(Object(i.jsx)(p,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.b91be052.chunk.js.map