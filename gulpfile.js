const gulp = require('gulp');
const sass = require('gulp-sass');
const _babel = require('gulp-babel')
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const shell = require('shelljs')

/*

    EXEMPLO DE FUNCIONAMENTO DO GULP


    @param  { string } "name" = nome da task
    @param  { [ string ]} triger de task opcional
    @param  { FN()} callback() responsavel por processar nosso arquivos

    gulp.task( "name" , [ 'chamarTarefa1', 'chamarTarefa2' ] , callback() );

    exemplo estrutural

    gulp.task('NOME DA TAREFA', ()=>{
        return gulp.src('PATH DO AQUIVO A SER PROCESSADO')
        .pipe( UTLIZA METODO PARA PROCESSAR O ARQUIVO E RETORNA)   <- [ PIPE ] TIPO METODO THEN DA PROMISE 
        .pipe( gulp.dest('PATH DO DESTINO A SER SALVO'))
    })

*/

//---------------------------------------------------
//           TASK CONVERSAO SASS -> CSS
//---------------------------------------------------

gulp.task('sass', ()=>{
    return gulp.src('./src/sass/**/*.scss')
        .pipe( sass().on('erro', sass.logError))
        .pipe( gulp.dest('./dist/css'))
})



//---------------------------------------------------
//      TASK CONCATENAS DIVERSOS FILE EM UM JS
//---------------------------------------------------



gulp.task('scripts', ()=>{
    return gulp.src('./src/js/**/*.js')
        .pipe(concat('bundle.js'))
        .pipe( gulp.dest('./dist/js') )
})

gulp.task('compila_es5', ()=>{
    gulp.src('./dist/js/bundle.js')
        .pipe( _babel(
            {
                presets: ['@babel/env']
            }
        ))
        .pipe(gulp.dest('./dist/main.js'))
});




//---------------------------------------------------
//                  FUNCTIONS WATCH
//---------------------------------------------------

// SASS
gulp.task('sass:watch', ()=> gulp.watch('./src/sass/**/*.scss', ['sass'] ) );

// JAVASCRIPT
gulp.task('scripts:watch' , ()=> gulp.watch('./src/js/**/*.js', ["scripts"]) );



//---------------------------------------------------
//                  METODO DEFAULT
//---------------------------------------------------


gulp.task('default', ['sass:watch', 'scripts:watch'],
    ()=> console.log('----------GULP INIT----------')
)

gulp.task('producao',['compila_es5'], ()=>{ })