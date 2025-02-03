export default function Body() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event) {
        event.preventDefault()
        console.log("Form submitted")

        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")

        ingredients.push(newIngredient)

        console.log(ingredients)
    }

    return (
        <main className="body">
            <form onSubmit={handleSubmit} className="add_ingredient_form">
                <input 
                    type="text"
                    aria-label="Add Ingredient" 
                    placeholder="e.g. oregano"
                    name="ingredient"
                />
                <button>Add Ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}