import { useImmer } from 'use-immer'
import './ShoppingList.css'

export default function ShoppingListWithImmer() {
  const [shoppingList, updateShoppingList] = useImmer({
    Costco: [],
    "Trader Joe's": [],
    Safeway: [],
    Hmart: []
  })

  const [editingId, setEditingId] = useImmer(null)
  const [currentStore, setCurrentStore] = useImmer(null)
  const [newItem, updateNewItem] = useImmer({
    name: '',
    quantity: 1,
    details: { category: '', notes: '' }
  })
  const [editForm, updateEditForm] = useImmer({
    name: '',
    quantity: 1,
    details: { category: '', notes: '' }
  })

  const addItem = () => {
    updateShoppingList(draft => {
      draft[currentStore].push({
        id: Date.now(),
        name: newItem.name || 'New Item',
        quantity: newItem.quantity || 1,
        bought: false,
        details: {
          category: newItem.details.category,
          notes: newItem.details.notes
        }
      })
    })
    updateNewItem(draft => {
      draft.name = ''
      draft.quantity = 1
      draft.details.category = ''
      draft.details.notes = ''
    })
  }

  const removeItem = (id) => {
    updateShoppingList(draft => {
      draft[currentStore] = draft[currentStore].filter(item => item.id !== id)
    })
  }

  const updateItem = (id) => {
    updateShoppingList(draft => {
      const item = draft[currentStore].find(item => item.id === id)
      item.name = editForm.name
      item.quantity = editForm.quantity
      item.details.category = editForm.details.category
      item.details.notes = editForm.details.notes
    })
    setEditingId(null)
  }

  const toggleBought = (id) => {
    updateShoppingList(draft => {
      const item = draft[currentStore].find(item => item.id === id)
      item.bought = !item.bought
    })
  }

  const startEditing = (item) => {
    setEditingId(item.id)
    updateEditForm(draft => {
      draft.name = item.name
      draft.quantity = item.quantity
      draft.details.category = item.details.category
      draft.details.notes = item.details.notes
    })
  }

  const sortedList = currentStore
    ? [...shoppingList[currentStore]].sort((a, b) => a.bought - b.bought)
    : []

  if (!currentStore) {
    return (
      <div className="home-screen">
        <h1>Grocery Shopping List</h1>
        <div className="store-grid">
          <button className="store-btn" onClick={() => setCurrentStore('Costco')}>
            <img src="https://bfasset.costco-static.com/56O3HXZ9/at/rk6tbjv3r44x6r6qt6k56r2x/costco-logo-usbc.png?auto=webp&format=jpg&width=1400" alt="Costco" />
          </button>
          <button className="store-btn" onClick={() => setCurrentStore("Trader Joe's")}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Trader_Joes_Logo.svg/3840px-Trader_Joes_Logo.svg.png" alt="Trader Joe's" />
          </button>
          <button className="store-btn" onClick={() => setCurrentStore('Safeway')}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcj00eUmI2gLzcQwkDBBfFYEM-lN8ISk7w9A&s" alt="Safeway" />
          </button>
          <button className="store-btn" onClick={() => setCurrentStore('Hmart')}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/H_Mart_logo.svg/3840px-H_Mart_logo.svg.png" alt="H Mart" />
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="list-screen">
      <div className="left-panel">
        <div className="top-btns">
          <button className="btn-home" onClick={() => setCurrentStore(null)}>Home</button>
          <button className="btn-add" onClick={addItem}>+ Add Item</button>
        </div>
        <div className="input-group">
          <label>Name</label>
          <input
            value={newItem.name}
            onChange={e => updateNewItem(draft => { draft.name = e.target.value })}
            placeholder="e.g. Apples"
          />
        </div>
        <div className="input-group">
          <label>Quantity</label>
          <input
            type="number"
            value={newItem.quantity}
            onChange={e => updateNewItem(draft => { draft.quantity = parseInt(e.target.value) })}
            placeholder="1"
          />
        </div>
        <div className="input-group">
          <label>Category</label>
          <input
            value={newItem.details.category}
            onChange={e => updateNewItem(draft => { draft.details.category = e.target.value })}
            placeholder="e.g. Fruit"
          />
        </div>
        <div className="input-group">
          <label>Notes</label>
          <input
            value={newItem.details.notes}
            onChange={e => updateNewItem(draft => { draft.details.notes = e.target.value })}
            placeholder="e.g. Organic"
          />
        </div>
      </div>

      <div className="right-panel">
        <h2 className="store-header">{currentStore}</h2>
        {sortedList.length === 0 && (
          <p className="empty-msg">No items yet. Add one from the left panel!</p>
        )}
        {sortedList.map(item => (
          <div key={item.id} className={`item-card ${item.bought ? 'bought' : ''}`}>
            <p className="item-name">{item.name} ({item.quantity})</p>
            <p className="item-details">
              {item.details.category}{item.details.notes ? ` · ${item.details.notes}` : ''}
            </p>

            {editingId === item.id && (
              <div className="edit-form">
                <div className="edit-row">
                  <div className="edit-field">
                    <label>Name</label>
                    <input
                      value={editForm.name}
                      onChange={e => updateEditForm(draft => { draft.name = e.target.value })}
                    />
                  </div>
                  <div className="edit-field" style={{ maxWidth: '70px' }}>
                    <label>Quantity</label>
                    <input
                      type="number"
                      value={editForm.quantity}
                      onChange={e => updateEditForm(draft => { draft.quantity = parseInt(e.target.value) })}
                    />
                  </div>
                </div>
                <div className="edit-row">
                  <div className="edit-field">
                    <label>Category</label>
                    <input
                      value={editForm.details.category}
                      onChange={e => updateEditForm(draft => { draft.details.category = e.target.value })}
                    />
                  </div>
                  <div className="edit-field">
                    <label>Notes</label>
                    <input
                      value={editForm.details.notes}
                      onChange={e => updateEditForm(draft => { draft.details.notes = e.target.value })}
                    />
                  </div>
                </div>
                <button className="save-btn" onClick={() => updateItem(item.id)}>Save</button>
              </div>
            )}

            <div className="item-btns">
              <button className="item-btn" onClick={() => editingId === item.id ? setEditingId(null) : startEditing(item)}>
                {editingId === item.id ? 'Cancel' : 'Update'}
              </button>
              <button className="item-btn bought-btn" onClick={() => toggleBought(item.id)}>
                {item.bought ? 'Undo' : 'Bought'}
              </button>
              <button className="item-btn delete" onClick={() => removeItem(item.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}