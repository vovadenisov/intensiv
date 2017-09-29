import { normalize, schema } from 'normalizr';

const posts = [
    {
        author: {
            id: 576,
            first_name: 'Artur',
            email: 'test@mail.ru',
        },
        content: 'Post content',
        title: 'Post Title',
        id: 432,
    },
    {
        author: {
            id: 51,
            first_name: 'Artur',
            email: 'test@mail.ru',
        },
        content: 'Post content',
        title: 'Post Title',
        id: 442,
    },
    {
        author: {
            id: 54,
            first_name: 'Artur',
            email: 'test@mail.ru',
        },
        content: 'Post content',
        title: 'Post Title',
        id: 654,
        commentList: [
            {
                id: 324,
                commenter: {
                    id: 2,
                    first_name: 'Artur',
                    email: 'test@mail.ru',
                },
            },
            {
                id: 321,
                commenter: {
                    id: 54,
                    first_name: 'Artur',
                    email: 'test@mail.ru',
                    parent: {}
                },
            },
        ],
    },
    {
        author: {
            id: 5412,
            first_name: 'Artur',
            email: 'test@mail.ru',
        },
        content: 'Post content',
        title: 'Post Title',
        id: 32,
    },

];

export const user = new schema.Entity('users');
const comment = new schema.Entity('comments', {
    commenter: user,
});
const post = new schema.Entity('posts', {
    author: user,
    commentList: [comment]
});

console.log(normalize(posts, [post]));



// export const user = new schema.Entity('users');
// export const project = new schema.Entity('projects');
// export const task = new schema.Entity('tesks', {
//     assign_to: user,
//     author: user,
//     project: project,
// });
