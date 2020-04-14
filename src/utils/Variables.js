import comedyLogo from '../assets/images/icons/books/comedy.svg';
import horrorLogo from '../assets/images/icons/books/horror.svg';
import nonfictionLogo from '../assets/images/icons/books/non-fiction.svg';
import travelLogo from '../assets/images/icons/books/travel.svg';
import miscLogo from '../assets/images/icons/books/misc.svg';
import fantasyLogo from '../assets/images/icons/books/fantasy.svg';
import autobioLogo from '../assets/images/icons/books/autobio.svg';

export const API_URL = 'http://localhost:4000/API/v1/'
export const CATEGORIES = [
    {
        categoryID: 0,
        categoryName: "Miscellaneous",
        categoryImage: miscLogo
    },
    {
        categoryID: 1,
        categoryName: "Horror",
        categoryImage: horrorLogo
    },
    {
        categoryID: 2,
        categoryName: "Non-fiction",
        categoryImage: nonfictionLogo
    },
    {
        categoryID: 3,
        categoryName: "Fantasy",
        categoryImage: fantasyLogo
    },
    {
        categoryID: 4,
        categoryName: "Autobiography",
        categoryImage: autobioLogo
    },
    {
        categoryID: 5,
        categoryName: "Comedy",
        categoryImage: comedyLogo
    },
    {
        categoryID: 6,
        categoryName: "Travel",
        categoryImage: travelLogo
    }
]
