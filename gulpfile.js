/**
 * Created by Utilisateur on 03/05/2016.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');





//Tache SASS
gulp.task('sass', function() {
   return gulp.src('app/scss/**/*.scss')
       .pipe(sass())
       .pipe(gulp.dest('app/css'))
       .pipe(browserSync.reload({
          stream: true
       }))
});


//Tache crée le server BrowserSync 
gulp.task('browserSync', function() {
   browserSync({
      server: {
         baseDir: 'app'
      }
   })
});




//J'automatise dès le rafraichissement dès la modification d'un fichier 
gulp.task('watch',['browserSync', 'sass'], function() {
   gulp.watch('app/scss/**/*.scss', ['sass']);
   
   gulp.watch('app/*.html', browserSync.reload);
   gulp.watch('app/js/**/*.js', browserSync.reload);
});
