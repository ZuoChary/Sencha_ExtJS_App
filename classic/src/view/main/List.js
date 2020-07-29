/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'MyApp.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});

Ext.define('MyApp.view.student.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'studentlist',

    requires: [
        'MyApp.store.Student'
    ],

    title: 'Student',

    store: {
        type: 'student'
    },

    columns: [
        { text: 'Id',  dataIndex: 'Id'},
        { text: 'Name',  dataIndex: 'Name', flex: 1 },
        { text: 'Age', dataIndex: 'Age', flex: 1 },
        { text: 'Gender', dataIndex: 'Gender', flex: 1 }
    ],

    listeners: {
        beforerender: function() {
            const store = this.getView().store;
            store.read();
        }
    }
});
