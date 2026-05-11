import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { collection, query, onSnapshot, addDoc, Timestamp, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Package, ShoppingBag, Plus, LayoutDashboard, Truck, MapPin, Search, Trash2 } from 'lucide-react';

type AdminTab = 'overview' | 'orders' | 'products';

interface Order {
  id: string;
  userId: string;
  items: any[];
  total: number;
  tax: number;
  subtotal: number;
  shipping: {
    fullName: string;
    phone: string;
    address: string;
    barangay?: string;
    city: string;
    province: string;
    zip: string;
    country: string;
  };
  paymentMethod: string;
  status: string;
  createdAt: Timestamp;
}

interface ProductForm {
  title: string;
  author: string;
  price: string;
  genre: string;
  image: string;
  description: string;
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<AdminTab>('overview');
  const [orders, setOrders] = useState<Order[]>([]);
  const [newProduct, setNewProduct] = useState<ProductForm>({
    title: '', author: 'Dr. Finnian Ebuehi', price: '', genre: '', image: '', description: ''
  });
  const [isAddingProduct, setIsAddingProduct] = useState(false);

  useEffect(() => {
    // Fetch Orders
    const q = query(collection(db, 'orders'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const ordersData: Order[] = [];
      snapshot.forEach((doc) => {
        ordersData.push({ id: doc.id, ...doc.data() } as Order);
      });
      // Sort by date descending in memory to avoid needing a Firestore index right away
      ordersData.sort((a, b) => {
        const timeA = a.createdAt?.toMillis() || 0;
        const timeB = b.createdAt?.toMillis() || 0;
        return timeB - timeA;
      });
      setOrders(ordersData);
    });

    return () => unsubscribe();
  }, []);

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAddingProduct(true);
    try {
      await addDoc(collection(db, 'books'), {
        ...newProduct,
        price: parseFloat(newProduct.price) || 0,
        rating: 5.0, // Default for new books
        createdAt: Timestamp.now()
      });
      setNewProduct({ title: '', author: 'Dr. Finnian Ebuehi', price: '', genre: '', image: '', description: '' });
      alert("Product added successfully!");
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product.");
    } finally {
      setIsAddingProduct(false);
    }
  };

  const handleDeleteOrder = async (orderId: string) => {
    if (window.confirm("Are you sure you want to delete this order? This cannot be undone.")) {
      try {
        await deleteDoc(doc(db, 'orders', orderId));
      } catch (error) {
        console.error("Error deleting order:", error);
        alert("Failed to delete order.");
      }
    }
  };

  const totalRevenue = orders.reduce((acc, order) => acc + (order.total || 0), 0);
  const totalOrders = orders.length;

  return (
    <div className="min-h-screen bg-cream flex pt-[72px]">
      {/* Sidebar */}
      <aside className="w-64 bg-paper border-r border-espresso/5 flex flex-col hidden md:flex">
        <div className="p-6">
          <h2 className="text-xl font-display text-espresso font-bold tracking-tighter">Admin Portal</h2>
          <p className="text-[10px] text-espresso/40 uppercase tracking-widest mt-1">Management</p>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm transition-colors text-sm font-medium ${activeTab === 'overview' ? 'bg-gold text-espresso' : 'text-espresso/60 hover:bg-espresso/5 hover:text-espresso'}`}
          >
            <LayoutDashboard size={18} /> Overview
          </button>
          <button 
            onClick={() => setActiveTab('orders')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm transition-colors text-sm font-medium ${activeTab === 'orders' ? 'bg-gold text-espresso' : 'text-espresso/60 hover:bg-espresso/5 hover:text-espresso'}`}
          >
            <ShoppingBag size={18} /> Orders
          </button>
          <button 
            onClick={() => setActiveTab('products')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm transition-colors text-sm font-medium ${activeTab === 'products' ? 'bg-gold text-espresso' : 'text-espresso/60 hover:bg-espresso/5 hover:text-espresso'}`}
          >
            <Package size={18} /> Products
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 lg:p-12 overflow-y-auto">
        {activeTab === 'overview' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            <div>
              <h1 className="text-3xl font-display text-espresso mb-2">Dashboard Overview</h1>
              <p className="text-espresso/60 font-serif italic">Welcome back to the command center.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-paper p-6 border border-espresso/5 rounded-sm shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-espresso/60">Total Revenue</h3>
                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center text-gold"><LayoutDashboard size={20} /></div>
                </div>
                <p className="text-4xl font-display text-espresso">${totalRevenue.toFixed(2)}</p>
              </div>
              <div className="bg-paper p-6 border border-espresso/5 rounded-sm shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-espresso/60">Total Orders</h3>
                  <div className="w-10 h-10 bg-vintage-red/20 rounded-full flex items-center justify-center text-vintage-red"><ShoppingBag size={20} /></div>
                </div>
                <p className="text-4xl font-display text-espresso">{totalOrders}</p>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'orders' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-display text-espresso mb-2">Order Management</h1>
                <p className="text-espresso/60 font-serif italic">Review customer purchases and shipping details.</p>
              </div>
            </div>

            <div className="space-y-6">
              {orders.length === 0 ? (
                <div className="text-center py-20 bg-paper border border-espresso/5 rounded-sm">
                  <p className="text-espresso/40 italic font-serif">No orders have been placed yet.</p>
                </div>
              ) : (
                orders.map(order => (
                  <div key={order.id} className="bg-paper border border-espresso/10 rounded-sm shadow-sm overflow-hidden flex flex-col md:flex-row">
                    {/* Order Info */}
                    <div className="p-6 md:w-1/3 border-b md:border-b-0 md:border-r border-espresso/10 bg-espresso/5">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-gold text-espresso text-[10px] font-bold uppercase tracking-widest rounded-full">{order.status}</span>
                        <span className="text-xs text-espresso/60 font-serif italic">
                          {order.createdAt ? new Date(order.createdAt.toMillis()).toLocaleString() : 'Just now'}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <p className="text-sm font-bold text-espresso mb-1">Order ID</p>
                          <p className="text-xs text-espresso/60 font-mono break-all">{order.id}</p>
                        </div>
                        <button 
                          onClick={() => handleDeleteOrder(order.id)}
                          className="text-espresso/20 hover:text-vintage-red transition-colors p-2"
                          title="Delete Order"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      
                      <p className="text-2xl font-display text-espresso mb-2">${order.total?.toFixed(2)}</p>
                      <p className="text-xs text-espresso/60">{order.items?.length || 0} items included</p>
                    </div>

                    {/* Shipping & Items */}
                    <div className="p-6 md:w-2/3 flex flex-col lg:flex-row gap-8">
                      <div className="flex-1">
                        <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-espresso mb-4">
                          <MapPin size={16} className="text-gold" /> Shipping Address
                        </h4>
                        <div className="text-sm text-espresso/80 space-y-2 font-serif">
                          <p><span className="text-[10px] uppercase tracking-widest text-espresso/50 font-bold mr-2 font-sans">Full Name:</span> <span className="font-bold text-espresso font-sans">{order.shipping?.fullName}</span></p>
                          <p><span className="text-[10px] uppercase tracking-widest text-espresso/50 font-bold mr-2 font-sans">Phone:</span> {order.shipping?.phone || 'N/A'}</p>
                          <p><span className="text-[10px] uppercase tracking-widest text-espresso/50 font-bold mr-2 font-sans">Street Address:</span> {order.shipping?.address}</p>
                          {order.shipping?.barangay && <p><span className="text-[10px] uppercase tracking-widest text-espresso/50 font-bold mr-2 font-sans">Brgy / Unit:</span> {order.shipping.barangay}</p>}
                          <p><span className="text-[10px] uppercase tracking-widest text-espresso/50 font-bold mr-2 font-sans">City:</span> {order.shipping?.city}</p>
                          <p><span className="text-[10px] uppercase tracking-widest text-espresso/50 font-bold mr-2 font-sans">Province:</span> {order.shipping?.province || 'N/A'}</p>
                          <p><span className="text-[10px] uppercase tracking-widest text-espresso/50 font-bold mr-2 font-sans">Zipcode:</span> {order.shipping?.zip}</p>
                          <p><span className="text-[10px] uppercase tracking-widest text-espresso/50 font-bold mr-2 font-sans">Country:</span> {order.shipping?.country}</p>
                        </div>
                      </div>

                      <div className="flex-1">
                        <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-espresso mb-4">
                          <Package size={16} className="text-gold" /> Items
                        </h4>
                        <div className="space-y-3">
                          {order.items?.map((item, i) => (
                            <div key={i} className="flex justify-between items-start text-sm">
                              <div>
                                <p className="font-medium text-espresso line-clamp-1">{item.title}</p>
                                <p className="text-xs text-espresso/60 italic">Qty: {item.quantity}</p>
                              </div>
                              <p className="font-bold text-espresso">${item.price?.toFixed(2)}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        )}

        {activeTab === 'products' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8 max-w-3xl">
            <div>
              <h1 className="text-3xl font-display text-espresso mb-2">Add New Product</h1>
              <p className="text-espresso/60 font-serif italic">Expand your library's collection directly to the database.</p>
            </div>

            <form onSubmit={handleAddProduct} className="bg-paper border border-espresso/10 p-8 rounded-sm shadow-sm space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-espresso/60 mb-2">Book Title</label>
                  <input required type="text" className="w-full bg-transparent border border-espresso/20 p-3 outline-none focus:border-gold text-espresso" value={newProduct.title} onChange={e => setNewProduct({...newProduct, title: e.target.value})} />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-espresso/60 mb-2">Author</label>
                    <input required type="text" className="w-full bg-transparent border border-espresso/20 p-3 outline-none focus:border-gold text-espresso" value={newProduct.author} onChange={e => setNewProduct({...newProduct, author: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-espresso/60 mb-2">Genre / Category</label>
                    <input required type="text" placeholder="e.g. Theology, Fiction" className="w-full bg-transparent border border-espresso/20 p-3 outline-none focus:border-gold text-espresso" value={newProduct.genre} onChange={e => setNewProduct({...newProduct, genre: e.target.value})} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-espresso/60 mb-2">Price ($)</label>
                    <input required type="number" step="0.01" className="w-full bg-transparent border border-espresso/20 p-3 outline-none focus:border-gold text-espresso" value={newProduct.price} onChange={e => setNewProduct({...newProduct, price: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-espresso/60 mb-2">Image URL</label>
                    <input required type="url" placeholder="https://..." className="w-full bg-transparent border border-espresso/20 p-3 outline-none focus:border-gold text-espresso" value={newProduct.image} onChange={e => setNewProduct({...newProduct, image: e.target.value})} />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-espresso/60 mb-2">Description</label>
                  <textarea required rows={4} className="w-full bg-transparent border border-espresso/20 p-3 outline-none focus:border-gold text-espresso resize-none" value={newProduct.description} onChange={e => setNewProduct({...newProduct, description: e.target.value})} />
                </div>
              </div>

              <button disabled={isAddingProduct} type="submit" className="w-full bg-espresso text-cream py-4 font-bold uppercase tracking-widest text-xs hover:bg-gold hover:text-espresso transition-all flex items-center justify-center gap-2 disabled:opacity-50">
                <Plus size={16} /> {isAddingProduct ? 'Adding Book...' : 'Add Book to Catalog'}
              </button>
            </form>
          </motion.div>
        )}
      </main>
    </div>
  );
}
