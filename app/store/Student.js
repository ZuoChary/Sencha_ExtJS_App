Ext.define('MyApp.store.Student', {
    extend: 'Ext.data.Store',

    alias: 'store.student',

    model: 'MyApp.model.Student',

    // data: { items: [
    //     { id: 1, name: 'Jean Luc', age: 22, gender: "male" },
    //     { id: 2, name: 'Worf',     age: 24, gender: "male" },
    //     { id: 3, name: 'Deanna',   age: 23, gender: "female" },
    //     { id: 4, name: 'Data',     age: 20, gender: "male" }
    // ]},

    proxy: {
        // type: 'memory',
        // reader: {
        //     type: 'json',
        //     rootProperty: 'items'
        // }

        type: 'ajax',
        url: 'https://localhost:44396/Student/GetStudent',
        useDefaultXhrHeader : false,
        actionMethod:{
            read: 'post'
        }

    }
});