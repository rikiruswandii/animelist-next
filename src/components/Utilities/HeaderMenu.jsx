const HeaderMenu = ({title}) => {
    return (
      <div>
        <div className="p-8">
          <h3
            className="text-center text-2xl text-color-secondary"
            dangerouslySetInnerHTML={{ __html: title }}
          >
          </h3>
        </div>
      </div>
    );
}
export default HeaderMenu