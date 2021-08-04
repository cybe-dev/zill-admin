const {
  forwardRef,
  Fragment,
  useState,
  useImperativeHandle,
  useEffect,
} = require("react");
const { FiX } = require("react-icons/fi");

const Modal = forwardRef(({ title, children }, ref) => {
  const [hide, setHide] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!hide) {
      setShow(true);
    }
  }, [hide]);

  useEffect(() => {
    let timeout;
    if (!show) {
      timeout = setTimeout(() => {
        setHide(true);
      }, 300);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [show]);

  useImperativeHandle(
    ref,
    () => ({
      hide: () => {
        setShow(false);
      },
      show: () => {
        setHide(false);
      },
    }),
    []
  );
  return (
    <Fragment>
      <div
        className={
          "bg-black-100 fixed top-0 left-0 w-full h-screen z-20 transition-all duration-300 " +
          (hide ? "hidden" : "block") +
          (show ? " opacity-50" : " opacity-0")
        }
        onClick={() => {
          setShow(false);
        }}
      />
      <div
        className={
          "pointer-events-none fixed top-0 left-0 w-full min-h-screen justify-center items-center z-20 transition-all duration-300 transform " +
          (hide ? "hidden" : "flex") +
          (show ? " translate-y-0" : " -translate-y-full")
        }
      >
        <div className="bg-white-100 rounded m-5 w-full md:w-2/3 lg:w-2/5 pointer-events-auto">
          <div className="flex items-center p-5 border-b border-white-200">
            <h3 className="flex-1 text-lg monda font-bold">{title}</h3>
            <button
              className="w-8 h-8 flex justify-center items-center"
              type="button"
              onClick={() => {
                setShow(false);
              }}
            >
              <FiX />
            </button>
          </div>
          <div className="p-5">{children}</div>
        </div>
      </div>
    </Fragment>
  );
});

export default Modal;
