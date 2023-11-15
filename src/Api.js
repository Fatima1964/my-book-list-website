// api.js
const API_URL = 'https://65553c0063cafc694fe7947b.mockapi.io/:endpoint';

// Function to fetch books
export const fetchBooks = async () => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error('Failed to fetch books.');
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Function to add a book
export const addBook = async (newBook) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    });

    if (!response.ok) {
      throw new Error('Failed to add book.');
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Function to remove a book
export const removeBook = async (bookId) => {
  try {
    const response = await fetch(`${API_URL}/${bookId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to remove book.');
    }
  } catch (error) {
    console.error(error);
  }
};
