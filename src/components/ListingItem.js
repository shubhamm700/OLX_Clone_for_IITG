import React from "react";
import { Link } from "react-router-dom";
import {FcElectronics} from "react-icons/fc";
import { BsBicycle } from "react-icons/bs";
const ListingItem = ({ listing, id, onDelete, onEdit }) => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <div className="card category-link mb-2" style={{ width: "800px" }}>
          <Link to={`/category/${listing.type}/${id}`}>
            <div className="row container p-2">
              <div className="col-md-5">
                <img
                  src={listing.imgUrls[0]}
                  className="img-thumbnail"
                  alt={listing.name}
                  height={200}
                  width={300}
                />
              </div>
              <div className="col-md-5">
                <p>{listing.location}</p>
                <h2>{listing.name}</h2>
                <p>
                  Rs :{" "}
                  {listing.offer
                    ? listing.discountedPrice
                    : listing.regularPrice}{" "}
                  {listing.type === "rent" && " "}
                </p>
                <p>
                  <BsBicycle /> &nbsp;
                  {listing.bedrooms > 0
                    ? `${listing.bedrooms} Cycle(s)`
                    : "0 Cycle"}
                </p>
                <p>
                  <FcElectronics /> &nbsp;
                  {listing.bathrooms > 0
                    ? `${listing.bathrooms} Electronic Gadgets`
                    : "0 Electronic Gadget"}
                </p>
              </div>
            </div>
          </Link>
          <div>
            {onDelete && (
              <button
                className="btn btn-danger"
                onClick={() => onDelete(listing.id)}
              >
                Delete Listing
              </button>
            )}
            {onEdit && (
              <button
                className="btn btn-info ms-3"
                onClick={() => onEdit(listing.id)}
              >
                Edit Listing
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingItem;