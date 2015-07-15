require( '../build/js/features.js' );
require( './mocks/jquery-mock.js' );
require( './mocks/document-mock.js' );
require( './helpers/lodash.js' );
require( '../build/js/core/dom.js' );

describe( 'dom', function () {
    it( 'creates a text node', function () {
        var dom = feature('core.dom')();

        var text = dom.text( 'hello world' )();
        expect(text.text).toBe( 'hello world' );
    });

    it( 'creates a div node', function () {
        var dom = feature('core.dom')();

        var divFn = dom.div();
        expect(typeof(divFn)).toBe( 'function' );
        var div = divFn();
        expect(div.type).toBe( 'div' );
    });

    it( 'creates a div node with text', function () {
        var dom = feature('core.dom')();

        var textFn = dom.text( 'hello world' );
        var div = dom.div()();
        var text = textFn(div);
        expect(div.type).toBe( 'div' );
        expect(div.children.length).toBe( 1 );
        expect(div.children[0].text).toBe( 'hello world' );
    });

    it( 'creates three nested divs', function () {
        var dom = feature('core.dom')();

        var div = dom.div(
            dom.div(
                dom.div()
            )
        )();

        expect(div.type).toBe( 'div' );
        expect(div.children.length).toBe( 1 );
        expect(div.children[0].type).toBe( 'div' );
    });

    it( 'creates three child divs', function () {
        var dom = feature('core.dom')();

        var div = dom.div(
            dom.div(),
            dom.div(),
            dom.div()
        )();

        expect(div.type).toBe( 'div' );
        expect(div.children.length).toBe( 3 );
    });

    it( 'creates a table with 4 rows and 4 columns', function () {
        var dom = feature('core.dom')();

        var table = dom.table(
            dom.tr(
                dom.td(),
                dom.td(),
                dom.td(),
                dom.td()
            ),
            dom.tr(
                dom.td(),
                dom.td(),
                dom.td(),
                dom.td()
            ),
            dom.tr(
                dom.td(),
                dom.td(),
                dom.td(),
                dom.td()
            ),
            dom.tr(
                dom.td(),
                dom.td(),
                dom.td(),
                dom.td()
            )
        )();

        expect(table.type).toBe( 'table' );
        expect(table.children.length).toBe( 4 );
    });
});
