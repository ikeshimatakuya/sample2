class Item {
    constructor(id, name, stock) {
        // 引数の値を使ってプロパティの初期化を行う
        this.id = id;       // 商品ID
        this.name = name;   // 商品名
        this.stock = stock; // 在庫数
    }

    // メソッド
    // IDの値を返す
    getId() {
        return this.id;
    }

    // nameの値を返す
    getName(){
        return this.name;
    }

    // stockの値を返す
    getStock() {
        return this.stock;
    }
    
    // 商品の追加
    addStock(num) {
        this.stock += num;
    }

    // 商品の販売
    sale(num){
        if (this.stock < num) {
            throw new Error('在庫が足りません')
        } else {
            this.stock -= num;
        }
    }
}

class Bed extends Item {
    constructor(id, name, stock, size){
        // 引数の値を使ってプロパティの初期化を行う
        super(id, name, stock);
        this.size = size; // ベッドのサイズ
    }

    getSize(){
        return this.size;
    }
}

// 課題chairクラス
class Chair extends Item {
    constructor(id,name,stock,status){
        // 引数の値を使ってプロパティの初期化を行う
        super(id,name,stock);
        // 中古かどうかを表すプロパティ
        this.status = status;
    }
}

// インスタンスの生成
let chair1 = new Chair('0001','高級イス',50,'新品');
let chair2 = new Chair('0002', 'ゲーミングチェア',30,'中古');
let bed3 = new Bed('0003', 'ソファベッド', 100, 'M');
let item4 = new Item('0004', '鍋', 100);

let itemList = [chair1, chair2, bed3, item4];

itemList.forEach((e) => {
    console.log(e);
})

//　全体の在庫数を確認
let totalStock = 0;
for (let i = 0; i < itemList.length; i++) {
    totalStock += itemList[i].getStock();
}
console.log('全体の在庫数:' + totalStock);

/*
Chair {id: '0001', name: '高級イス', stock: 50, status: '新品'}
Chair {id: '0002', name: 'ゲーミングチェア', stock: 30, status: '中古'}
Bed {id: '0003', name: 'ソファベッド', stock: 100, size: 'M'}
Item {id: '0004', name: '鍋', stock: 100}
全体の在庫数:280

と表示
*/