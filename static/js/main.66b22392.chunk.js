(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(20)},16:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(2),r=n.n(o),c=(n(16),n(3)),s=n(4),l=n(6),u=n(5),m=n(7),d=n(1),p=n(8),h=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).createItems=n.createItems.bind(Object(d.a)(Object(d.a)(n))),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"createItems",value:function(e){var t=this;return i.a.createElement("div",{key:e.key,className:"item priority_".concat(e.prioity," done_").concat(e.done)},i.a.createElement("input",{type:"number",value:e.prioity,onChange:function(n){return t.updatePrioity(e.key,n)},min:"1",max:"3",className:"priority"}),i.a.createElement("label",null,i.a.createElement("input",{type:"checkbox",onChange:function(){return t.done(e.key)},checked:e.done}),i.a.createElement("span",null)),i.a.createElement("span",{className:"close",onClick:function(){return t.delete(e.key)}},"X"),i.a.createElement("span",{className:"item_text"},e.text))}},{key:"delete",value:function(e){this.props.delete(e)}},{key:"done",value:function(e){this.props.done(e)}},{key:"updatePrioity",value:function(e,t){console.log("todo e:"+t.target.value),console.log(e),this.props.updatePrioity(e,t)}},{key:"render",value:function(){var e=[],t=e,n=this.props.entries;return null!==n&&(t=n.filter(function(e){return!1===e.done}).map(this.createItems),console.log("listUndoneItems",t),e=n.filter(function(e){return!0===e.done}).map(this.createItems),console.log("listDoneItems",e)),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"theList"},i.a.createElement("h2",null,"Yet Todo"),i.a.createElement(p.a,{duration:250,easing:"ease-in-out"},t)),i.a.createElement(p.a,{duration:350,easing:"ease-in-out"},i.a.createElement("div",{className:"theList"},i.a.createElement("h2",null,"Done Todo"),i.a.createElement(p.a,{duration:350,easing:"ease-in-out"},e),i.a.createElement("span",{className:"count"},n.filter(function(e){return!0===e.done}).length," out of ",n.length," completed"))))}}]),t}(a.Component),f=(n(18),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){var e=localStorage.getItem("items"),t=JSON.parse(e);n.setState({items:t})},n.componentDidUpdate=function(){var e=JSON.stringify(n.state.items);localStorage.setItem("items",e)},n.state={items:[]},n.addItem=n.addItem.bind(Object(d.a)(Object(d.a)(n))),n.deleteItem=n.deleteItem.bind(Object(d.a)(Object(d.a)(n))),n.doneItem=n.doneItem.bind(Object(d.a)(Object(d.a)(n))),n.updatePrioity=n.updatePrioity.bind(Object(d.a)(Object(d.a)(n))),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"updatePrioity",value:function(e,t){var n=this.state.items;n.forEach(function(n){n.key===e&&(n.prioity=t.target.value)}),n.sort(function(e,t){return parseFloat(t.prioity)-parseFloat(e.prioity)}),this.setState({items:n})}},{key:"deleteItem",value:function(e){var t=this.state.items.filter(function(t){return t.key!==e});this.setState({items:t})}},{key:"doneItem",value:function(e){var t=this.state.items;t.forEach(function(t){t.key===e&&(t.done=!t.done)}),this.setState({items:t})}},{key:"addItem",value:function(e){if(""!==this._inputElement.value){var t={text:this._inputElement.value,done:!1,prioity:1,key:Date.now()};this.setState(function(e){return{items:e.items.concat(t).sort(function(e,t){return parseFloat(t.prioity)-parseFloat(e.prioity)})}}),this._inputElement.value=""}e.preventDefault()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"app"},i.a.createElement("div",{className:"header"},i.a.createElement("form",{onSubmit:this.addItem},i.a.createElement("input",{placeholder:"Enter Task",type:"text",ref:function(t){return e._inputElement=t}}),i.a.createElement("button",{type:"submit"},"Add"))),i.a.createElement(h,{entries:this.state.items,delete:this.deleteItem,done:this.doneItem,updatePrioity:this.updatePrioity}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.66b22392.chunk.js.map