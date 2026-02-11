import React, { Component } from 'react';

    function card ({username = "#undefined", Price = "#undefined", serial = "#undefined"}) {
        return (
            <>
             <div className="w-60 flex flex-col rounded-xl bg-black min-h-76 ">
      <div>
        <img
          src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
          alt="test"
          className="object-cover object-center rounded-t-xl"
        />
      </div>
      <div className="flex flex-col py-3 px-2 pb-10 m-2">
        <div className="flex justify-between gap-5">
          <p className="inline text-left font-bold">{username}</p>
          <p>Price</p>
        </div>
        <div className="flex  justify-between mt-6">
          <p>{serial}</p>
          <p>{Price}</p>
        </div>
      </div>
    </div>
            
            </>
        );
    }
 
export default card;