const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');

// Compilar SCSS para CSS
gulp.task('sass', function() { 
  return gulp.src('src/scss/main.scss')  // Caminho para o arquivo SCSS
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist'));  // Destino do arquivo CSS compilado
});


// Tarefa de observação 
gulp.task('watch', function() {
  gulp.watch('src/scss/**/*.scss', gulp.series('sass'));  // Observa mudanças nos arquivos SCSS
});

// Tarefa padrão
gulp.task('default', gulp.series('sass', 'watch'));
