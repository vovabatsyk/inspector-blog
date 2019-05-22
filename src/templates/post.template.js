export function renderPost(post, options = {}) {
    const tag = post.type === 'news'
        ? '<li class="btn btn-danger btn-sm disabled mr-2" tabindex="-1" role="button" aria-disabled="true">Інше</li>'
        : '<li class="btn btn-success btn-sm disabled mr-2" tabindex="-1" role="button" aria-disabled="true">Фабула</li>'

    const favorites = JSON.parse(localStorage.getItem('favorites')) || []
    const candidate = favorites.find(p => p.id === post.id)

    const button = candidate
        ? `<button class="btn btn-danger" data-id="${post.id}" data-title="${post.title}">Видалити</button>`
        : `<button class="btn btn-primary" data-id="${post.id}" data-title="${post.title}">Зберегти</button>`
    return `
        <div class="card bg-light mt-3">
            <div class="card-header">${tag}${post.title}</div>
            <div class="card-body">
                <p class="card-text text-justify">${post.fulltext}</p>
            </div>
            <div class="card-footer text-muted">
                <small>Додано: ${post.date}</small>            
                ${options.withButton ? button : ''}
            </div>
        </div>
    `
}