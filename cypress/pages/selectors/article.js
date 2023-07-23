module.exports = {
    title: '[ng-bind="::$ctrl.article.title"]',
    body: '[ng-bind-html*="ctrl.article.body"] p',
    deleteButton: 'h1 + article-actions .btn-outline-danger',
    comments: '[ng-repeat*=".comments"] [ng-bind="::$ctrl.data.body"]',
    commentField: '.card.comment-form textarea',
    postCommentButton: '.card.comment-form .btn',
    banner: '.banner',
    author: '.banner .author',
    followButton: '.banner follow-btn',
    favoriteButton: '.banner favorite-btn',
    actions: '.article-actions',
    commentTextForLoggedOutUsers: 'p[show-authed=false]'
}
