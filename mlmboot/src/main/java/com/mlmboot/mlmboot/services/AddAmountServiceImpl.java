package com.mlmboot.mlmboot.services;
import com.mlmboot.mlmboot.repository.AddAmountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AddAmountServiceImpl implements AddAmountService{
	private final AddAmountRepository addAmountRepository;

    @Autowired
    public AddAmountServiceImpl(AddAmountRepository addAmountRepository) {
        this.addAmountRepository = addAmountRepository;
    }

    @Override
    public boolean addAmount(String name, String amount) {
        // Implement the logic to add the provided amount to the user's previous amount
        // Use addAmountRepository to interact with the database
        return addAmountRepository.addAmount(name, amount);
    }
}
