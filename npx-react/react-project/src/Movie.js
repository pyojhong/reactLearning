import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

function Movie() {
    return <Router>
        <Routes>
            <Route path='/movie/:id' element={<Detail/>}/>
            <Route path='/' element={<Home />}>
            </Route>
        </Routes>
    </Router>;
}

export default Movie;