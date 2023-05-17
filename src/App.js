// import logo from './logo.svg';
import './App.css';
import Header from './header';
import Square from './square-articles';
import Tips from './tips';

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <Square />
      <Tips
        title="TIPS"
        paragraph="How to choose the best management software"
      />
      <hr/>
      <Tips
        title="TIPS"
        paragraph="3 tips to avoid internet distractions at work"
      />
      <hr/>
      <Tips
        title="RESOURCES"
        paragraph="7 great productivity apps for your new iPad"
      />
      <h3 className="latestArticles">Latest articles</h3>
      <img src='https://picsum.photos/500/300'/>
      <Tips
        title="TIPS"
        paragraph="How to choose the best management software"
      />

      

    </div>
  );
}

export default App;
