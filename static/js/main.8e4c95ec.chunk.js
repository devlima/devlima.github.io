(this["webpackJsonpdevlima.github.io"]=this["webpackJsonpdevlima.github.io"]||[]).push([[0],{23:function(e,t,a){e.exports=a(49)},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(22),o=a.n(l),c=a(3),i=a(4),s=a(8),m=a(9),u=a(5),p=a(7),h=a(6),f=a.n(h),E=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={profile:[],error:!1,errorDetail:""},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://api.github.com/users/devlima").then((function(t){e.setState({profile:t.data})})).catch((function(t){e.setState({error:!0,errorDetail:t})}))}},{key:"render",value:function(){return n.a.createElement(r.Fragment,null,n.a.createElement("h2",{className:this.state.error?"title h2":"error"},"Try again later"),n.a.createElement("div",{id:"profile",className:this.state.error?"error":"profile"},n.a.createElement("h1",{className:"title h1"},this.state.profile.name),n.a.createElement("p",{className:"subtitle"},this.state.profile.bio),n.a.createElement("p",{className:"location"},this.state.profile.location),n.a.createElement("nav",{className:"profile-nav"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.linkedin.com/in/gbrl/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://github.com/devlima",target:"_blank",rel:"noopener noreferrer"},"GitHub")),n.a.createElement("li",null,n.a.createElement("a",{href:"http://t.me/limagabriel",target:"_blank",rel:"noopener noreferrer"},"Telegram")),n.a.createElement("li",null,n.a.createElement("a",{href:"malito:devlimagabriel@gmail.com",target:"_blank",rel:"noopener noreferrer"},"devlimagabriel@gmail.com")))),n.a.createElement("a",{href:"#projects",className:"page-link page-link-right"},n.a.createElement("span",null,"Projects")," ",n.a.createElement(u.a,{icon:p.b}))))}}]),a}(r.Component),g=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={repos:[],error:!1,errorDetail:"",config:{headers:{"Access-Control-Allow-Origin":"*"}}},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://api.github.com/users/devlima/repos",{crossdomain:!0}).then((function(t){e.setState({repos:t.data})})).catch((function(t){e.setState({error:!0,errorDetail:t})}))}},{key:"render",value:function(){return n.a.createElement("div",{id:"projects",className:this.state.error?"error":"projects"},n.a.createElement("h2",{className:"title h2"},"Projects"),n.a.createElement("nav",{className:"projects-nav"},n.a.createElement("ul",null,this.state.repos.map((function(e,t){return n.a.createElement("li",{key:t},n.a.createElement("a",{className:"projects--link",href:e.homepage,target:"_blank",rel:"noopener noreferrer"},e.name),n.a.createElement("p",{className:"projects--description"},e.description),n.a.createElement("a",{className:"projects--link-code",href:e.html_url,target:"_blank",rel:"noopener noreferrer"},"code on github"))})))),n.a.createElement("a",{href:"#profile",className:"page-link page-link-left"}," ",n.a.createElement(u.a,{icon:p.a})," ",n.a.createElement("span",null,"Profile")))}}]),a}(r.Component);var b=function(){return n.a.createElement(r.Fragment,null,n.a.createElement(E,null),n.a.createElement(g,null))};a(48);o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.8e4c95ec.chunk.js.map