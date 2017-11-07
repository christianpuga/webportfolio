// NOTE: Don't use this token, replace it with your own client access token.
$.jribbble.setToken('3d9ec61aff5df82f32c07d131cc67a1c6e2305eb82dd5e6564c3882bd433d0b5');

$.jribbble.users('christianpuga').then(function(user) {
  var html = [];
  
  html.push('<a class="user-link" href="' + user.html_url + '" target="_blank">');
  html.push('<img class="avatar avatar--large" src="' + user.avatar_url + '"></a>');
  html.push('<h2>' + user.name + '</h2>');
  html.push('<p>' + user.bio + ' • ' + user.location + '<p/>');
  html.push('<p>' + user.shots_count + ' shots</p>');

  $('.profile').html(html.join(''));
});