describe( 'Array', function() {

    describe( 'browser support check (is a function)', function() {
        var ArrayProtoFunc = [
            'concat',
            'every',
            'join',
            'pop',
            'push',
            'reverse',
            'shift',
            'unshift',
            'slice',
            'sort',
            'splice',
            'some',
            'map',
            'filter',
            'reduce',
            'reduceRight',
            'indexOf',
            'lastIndexOf',
            'toString',
            'toLocaleString',
            'valueOf'
        ];

        _( ArrayProtoFunc ).each( function( key ) {
            it( 'Array.prototype.' + key + '()', function() {
                expect( Array.prototype[ key ] ).to.be.a( 'function' );
            });
        });
    });

    describe( 'Array.isArray()', function() {
        it( 'browser support', function() {
            expect( Array.isArray ).to.be.a( 'function' );
            expect( Array.isArray( [] ) ).to.be.ok();
            expect( Array.isArray( [ 'a', 'b' ] ) ).to.be.ok();
            expect( Array.isArray( 'hi' ) ).to.not.be.ok();
        });
    });

    describe( 'Array.prototype.indexOf() & Array.prototype.lastIndexOf()', function() {

        it( '没有值的时候结果为 -1', function() {
            var testArray = [ 'b', 'c' ];

            expect( [].indexOf('a') ).to.be( -1 );
            expect( [].lastIndexOf( 'a' ) ).to.be( -1 );
            expect( testArray.indexOf( 'a' ) ).to.be( -1 );
            expect( testArray.lastIndexOf( 'a' ) ).to.be( -1 );
        });

        it( '显示正确的index值', function() {
            var testArray = [ 'a', 'b', 'a', 'c' ];

            expect( testArray.indexOf( 'a' ) ).to.be( 0 );
            expect( testArray.lastIndexOf( 'a' ) ).to.be( 2 );
        });
    });

});
