/*<ul>
		<li><a href="/">Главная</a></li>
		<li><a href="/catalog">Каталог</a></li>
		<li><a href="/gallery">Галлерея</a></li>
</ul>*/


var config = [{
	href: '/',
	name: "Главная"
}, {
	href: '/catalog',
	name: "Каталог"
}, {
	href: '/gallery',
	name: "Галлерея",
	items: [{
	    href: '/1',
	    name: "Фото 1"
        }, {
	    href: '/2',
	    name: "Фото 2"
	}]
}];


class Container{
	constructor(id){
		this.id = id;
	}
	remove(){
		if(this.id){
			var deleteId = document.getElementById(this.id).remove();
		} 
	}
};

class Menu extends Container {
	constructor(id, config){
		super();
		this.id = id;
		this.items = [];
		this.createItems(config);
	}
	createItems(config){
		for (let i = 0; i < config.length; i++) {
			this.items.push(new MenuItem(config[i].href,config[i].name));

		}
	}
	create(){
		document.write(this.render());
	}
	render(){
		let result = '<ul id="' + this.id + '">';

		for (let i = 0; i < this.items.length; i++) {
			result += '<li id="' + i + '">' + this.items[i].render() + '</li>';
		}
		result += '</ul>';
		return result;
	}
};

class MenuItem extends Container{
	constructor(href,name){
		super();
		this.href = href;
		this.name = name;
	}
	render(){
		return '<a href="' + this.href + '">' + this.name + '</a>';
	}
}

let menu = new Menu("main-menu", config);
let container = new Container('');
menu.create();
container.remove();