import * as PIXI from 'pixi.js'

// Usage
//   RippleImage({
//     parent: this.$el.querySelector('.masthead__animation'),
//     imageSrc: require('@/static/images/bg.jpg'),
//     displacementImage: require('@/static/images/dmap-clouds.jpg'),
//     autoPlaySpeed: [0.3, 0.3],
//   })

export default function( options ) {
  //  OPTIONS
  /// ---------------------------
  options                     = options || {}
  options.parent              = options.hasOwnProperty('parent') ? options.parent : document.body
  options.imageSrc            = options.hasOwnProperty('imageSrc') ? options.imageSrc : ''
  options.displacementImage   = options.hasOwnProperty('displacementImage') ? options.displacementImage : ''
  options.autoPlaySpeed       = options.hasOwnProperty('autoPlaySpeed') ? options.autoPlaySpeed : [10, 3]

  //  PIXI VARIABLES
  /// ---------------------------
  const renderer            = new PIXI.Renderer( { width: innerWidth, height: innerHeight })
  const stage               = new PIXI.Container()
  const mainImage           = new PIXI.Container()
  const displacementSprite  = new PIXI.Sprite.from( options.displacementImage )
  const displacementFilter  = new PIXI.filters.DisplacementFilter( displacementSprite )

  /// ---------------------------
  //  INITIALISE PIXI
  /// ---------------------------
  const initPixi = function() {
    displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT
    // Set the filter to stage and set some default values for the animation
    stage.filters = [displacementFilter]
    displacementSprite.scale.x = 2
    displacementSprite.scale.y = 2

    // Add canvas to the HTML
    options.parent.appendChild( renderer.view )

    // Add child container to the main container
    stage.addChild( mainImage )
    stage.addChild( displacementSprite )
  }

  /// ---------------------------
  //  LOAD TO CANVAS
  /// ---------------------------
  const loadPixiSprites = function( image ) {
    const texture = new PIXI.Texture.from( image )
    const newImage  = new PIXI.Sprite( texture )
    mainImage.addChild( newImage )
  }

  /// ---------------------------
  //  DEFAULT RENDER/ANIMATION
  /// ---------------------------
  const ticker = new PIXI.Ticker()
  ticker.autoStart = true

  ticker.add(function( delta ) {
    displacementSprite.x += options.autoPlaySpeed[0] * delta
    displacementSprite.y += options.autoPlaySpeed[1]
    renderer.render( stage )
  })

  /// ---------------------------
  //  INIT FUNCTIONS
  /// ---------------------------
  const init = function() {
    initPixi()
    loadPixiSprites( options.imageSrc )
  }

  /// ---------------------------
  //  START
  /// ---------------------------
  init()
}
