import React from 'react';
import {SOMETHING_WENT_WRONG} from '../../config/config';
import ErrorMsg from '../UI/ErrorMsg/ErrorMsg';;
class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, info) {
      // You can also log the error to an error reporting service      
    }
  
    render() {
      if (this.state.hasError) {
        return <ErrorMsg>{SOMETHING_WENT_WRONG}</ErrorMsg>;
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary;